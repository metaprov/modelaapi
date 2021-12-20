
"""
Maintains version and package information for deployment.
"""

##########################################################################
## Module Info
##########################################################################

__version_info__ = {
    "major": 0,
    "minor": 4,
    "micro": 261,
    "releaselevel": "alpha",
    "post": 0,
    "serial": 1,
}

##########################################################################
## Helper Functions
##########################################################################


def get_version(short=False):
    """
    Prints the version.
    """
    assert __version_info__["releaselevel"] in ("alpha", "beta", "final")
    vers = ["{major}.{minor}".format(**__version_info__)]

    if __version_info__["micro"]:
        vers.append(".{micro}".format(**__version_info__))

    if __version_info__["releaselevel"] != "final" and not short:
        vers.append(
            "{}{}".format(
                __version_info__["releaselevel"][0],
                __version_info__["serial"],
            )
        )

    if __version_info__["post"]:
        vers.append(".post{}".format(__version_info__["post"]))

    return "".join(vers)
