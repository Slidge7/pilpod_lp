/**
 * Published versions of S7 products, in one place.
 *
 * The ReqTone page, its structured data and both dictionaries read the version
 * from here, so a new release is one edit. Keep it equal to the version on
 * reqtone.com/download (reqtone.com/src/data/release.js), which is generated
 * from the installer itself.
 */
export const REQTONE_VERSION = '1.3.0';

/** The download page, not the binary: it carries the SmartScreen notice and the SHA-256. */
export const REQTONE_DOWNLOAD = 'https://reqtone.com/download';
