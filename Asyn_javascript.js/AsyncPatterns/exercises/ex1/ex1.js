var filenames = [];
function fakeAjax(url, cb) {
  var fake_responses = {
    file1: "The first text",
    file2: "The middle text",
    file3: "The last text",
  };
  filenames.push(url);
  var randomDelay = (Math.round(Math.random() * 1e4) % 8000) + 1000;

  console.log("Requesting: " + url);

  setTimeout(function () {
    cb(fake_responses[url]);
  }, randomDelay);
}

function output(text) {
  console.log(text);
}

// **************************************
// The old-n-busted callback way

function getFile(file) {
  fakeAjax(file, function (text) {
    // what do we do here?
    handlerResponse(file, text);
  });
}

function handlerResponse(filename, contents) {
  if (!(filename in response)) {
    response[filename] = contents;
  }
  for (var i = 0; i < filenames.length; i++) {
    if (filenames[i] in response) {
      if (typeof (response[filenames[i]] == "string")) {
        output(response[filenames[i]]);
        response[filenames[i]] = false;
      }
    } else {
      return;
    }
  }
  output("Complete!");
}
var response = {};

// request all files at once in "parallel"
getFile("file2");
getFile("file1");
getFile("file3");
