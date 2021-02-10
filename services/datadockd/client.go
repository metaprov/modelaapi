/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package datadockd

import (
	"bytes"
	"context"
	"fmt"
	"github.com/metaprov/modeld-api/pkg/core"
	"io"
	"mime/multipart"
	"net/http"
	"os"
	"time"
)

//ManagerClient encapsulate the connection to the engine micro auth.
//which run locally or on the server.
type Client struct {
	Host string
	Port int32
}

func NewClient(host string, port int32) core.DatadockClient {
	return &Client{host, port}
}

// update a local file in the depot area
func (p *Client) Import(ctx context.Context,
	from string, // local path
	provider string,
	bucket string, // target bucket
	key string) error { //key in bucket

	var netClient = &http.Client{
		Timeout: time.Second * 10,
	}

	apiUrl := fmt.Sprintf("http://%s:%d/upload", p.Host, p.Port)
	return Upload(netClient, apiUrl, from, provider, bucket, key)
}

func Upload(client *http.Client, url string, from string, provider string, bucket string, key string) error {
	// RunModelJob buffer
	buf := new(bytes.Buffer) // caveat IMO dont use this for large files, \
	// create a tmpfile and assemble your multipart from there (not tested)
	w := multipart.NewWriter(buf)
	// provider field
	bk, err := w.CreateFormField("provider")
	if err != nil {
		return err
	}
	// Write label field
	_, err = bk.Write([]byte(provider))
	if err != nil {
		return err
	}

	// bucket field
	bk, err = w.CreateFormField("bucket")
	if err != nil {
		return err
	}
	// Write label field
	_, err = bk.Write([]byte(bucket))
	if err != nil {
		return err
	}

	// key field
	bk, err = w.CreateFormField("key")
	if err != nil {
		return err
	}
	// Write label field
	_, err = bk.Write([]byte(key))
	if err != nil {
		return err
	}

	// do the upload
	fd, err := os.Open(from)
	if err != nil {
		return err
	}

	// RunModelJob file field
	fw, err := w.CreateFormFile("file", from)
	if err != nil {
		return err
	}
	defer fd.Close()
	// Write file field from file to upload
	_, err = io.Copy(fw, fd)
	if err != nil {
		return err
	}
	// Important if you do not close the multipart writer you will not have a
	// terminating boundary
	w.Close()
	req, err := http.NewRequest("POST", url, buf)
	if err != nil {
		return err
	}
	req.Header.Set("Content-Type", w.FormDataContentType())
	//req.SetBasicAuth("email@email.com", "password")
	res, err := client.Do(req)
	if err != nil {
		return err
	}
	defer res.Body.Close()                // OK
	_, err = io.Copy(os.Stderr, res.Body) // Replace this with Status.Code check
	return err
}
