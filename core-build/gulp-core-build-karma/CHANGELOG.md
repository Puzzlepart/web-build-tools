# Change Log - @microsoft/gulp-core-build-karma

This log was last generated on Fri, 08 Sep 2017 01:28:04 GMT and should not be manually modified.

## 4.0.6
Fri, 08 Sep 2017 01:28:04 GMT

*Changes not tracked*

## 4.0.5
Thu, 07 Sep 2017 13:04:35 GMT

*Changes not tracked*

## 4.0.4
Thu, 07 Sep 2017 00:11:11 GMT

### Patches

-  Add $schema field to all schemas

## 4.0.3
Wed, 06 Sep 2017 13:03:42 GMT

*Changes not tracked*

## 4.0.2
Tue, 05 Sep 2017 19:03:56 GMT

*Changes not tracked*

## 4.0.1
Sat, 02 Sep 2017 01:04:26 GMT

*Changes not tracked*

## 4.0.0
Thu, 31 Aug 2017 18:41:18 GMT

### Breaking changes

- Fix compatibility issues with old releases, by incrementing the major version number

## 3.0.1
Thu, 31 Aug 2017 17:46:25 GMT

*Changes not tracked*

## 3.0.0
Wed, 30 Aug 2017 22:08:21 GMT

### Breaking changes

- Upgrade to webpack 3.X.

## 2.3.12
Wed, 30 Aug 2017 01:04:34 GMT

*Changes not tracked*

## 2.3.11
Thu, 24 Aug 2017 22:44:12 GMT

*Changes not tracked*

## 2.3.10
Thu, 24 Aug 2017 01:04:33 GMT

*Changes not tracked*

## 2.3.9
Tue, 22 Aug 2017 13:04:22 GMT

*Changes not tracked*

## 2.3.8
Tue, 15 Aug 2017 19:04:14 GMT

*Changes not tracked*

## 2.3.7
Tue, 15 Aug 2017 01:29:31 GMT

### Patches

- Force a patch bump to ensure everything is published

## 2.3.6
Sat, 12 Aug 2017 01:03:30 GMT

### Patches

- Failed tests now fail the build, even in non production mode.

## 2.3.5
Fri, 11 Aug 2017 21:44:05 GMT

*Changes not tracked*

## 2.3.4
Sat, 05 Aug 2017 01:04:41 GMT

*Changes not tracked*

## 2.3.3
Mon, 31 Jul 2017 21:18:26 GMT

*Changes not tracked*

## 2.3.2
Thu, 27 Jul 2017 01:04:48 GMT

### Patches

- Upgrade to the TS2.4 version of the build tools.

## 2.3.1
Tue, 25 Jul 2017 20:03:31 GMT

### Patches

- Upgrade to TypeScript 2.4

## 2.3.0
Fri, 07 Jul 2017 01:02:28 GMT

### Minor changes

- Enable StrictNullChecks.

## 2.2.3
Mon, 03 Jul 2017 13:04:18 GMT

### Patches

- Fix build break caused by @types/bluebird

## 2.2.2
Wed, 19 Apr 2017 20:18:06 GMT

### Patches

- Remove ES6 Promise & @types/es6-promise typings

## 2.2.1
Wed, 15 Mar 2017 01:32:09 GMT

### Patches

- Locking `@types` packages. Synchronizing version specifiers for dependencies with other `web-build-tools` projects.

## 2.2.0
Fri, 24 Feb 2017 14:01:38 GMT

### Minor changes

- The KarmaTask should only cause the build to fail if we are in production, otherwise treat failing tests as a warning.

## 2.1.3
Wed, 01 Feb 2017 02:32:46 GMT

### Patches

- Fixes a bug where the tests.js would not be written if the temp folder did not exist.

## 2.1.2
Tue, 31 Jan 2017 01:55:09 GMT

### Patches

- Introduce schema for KarmaTask

## 2.1.1
Mon, 30 Jan 2017 20:03:56 GMT

### Patches

- Making the "testMatch" property of "IKarmaTaskConfig" optional.

## 2.1.0
Fri, 27 Jan 2017 23:27:42 GMT

### Minor changes

- Add an additional configuration option (testMatch) to the KarmaTask configuration. If this option is specified, the KarmaTask will create a tests.js file in the temp folder which uses the testMatch regular expression to  locate test files.

## 2.0.2
Fri, 20 Jan 2017 01:46:41 GMT

### Patches

- Upgrading webpack-karma to support webpack 2.X

## 2.0.1
Fri, 13 Jan 2017 06:46:05 GMT

*Initial release*

