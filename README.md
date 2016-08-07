# Bookatable availability API

## Example code

_(Assuming you have Node.js and npm installed)_

Clone the code:

``` bash
git clone
```

Install dependencies:

``` bash
cd tables
npm install
```

Build it:

``` bash
npm run build
```

Run the app:

``` bash
node src/bin/cli.js
```

### Install as CLI tool

``` bash
npm install -g
```

Run it:

``` bash
tables
```

## How to use the API

Send a ```GET``` request to the following URL:

```
http://www.bookatable.se/bookingflow/availability
```

Included with the request should be a query string with the following parameters:

```covers``` - number of guests.

```date``` - date of visit, format is: YYYY-MM-DD.

```time``` - time of visit, format is: HH:MM.

```salesforceid``` - restaurant id, which corresponds to the attribute ```id``` of the ```<Restaurant>``` element in the ```bookatable-feed.xml``` file.

```language``` - sv-SE

Results are returned as JSON.

### Example

Table for two at Agaton on the 30th of August 2016 at 19:00.

```
http://www.bookatable.se/bookingflow/availability?covers=2&date=2016-08-30&19:00&salesforceid=100001&language=sv-SE
```
