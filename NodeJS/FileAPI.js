const os = require("os");
const path = require("path");
const fs = require("fs");

// Reading
// Access check
// The process of reading, or as some might say accessing the file is relatively the simplest of all FS-related processes.
// But, before reading the file itself, it's a good practice to check if it's even available with fs.access() method.



fs.access("file.js", fs.constants.F_OK, err => {
	console.log(err ? "Doesn't exist" : "Exists");
});
//Like many other FS methods, fs.access() takes a file path as the first parameter.
//When passing this argument, you should remember that it almost always has 3 acceptable forms - string, buffer, and URL object.


const pathStr = "file.js";
const pathBuff = Buffer.from("file.js");
const pathURL = new URL("file:///current/dir/file.js");

/* The string and Buffer form can represent both relative and absolute paths,
while URL is restricted to the usage of file: protocol and absolute paths only.
The data type that you'll represent your path in will depend on your use-cases, defaulting most likely to the string form.
Also, there are some quirks with Windows and the way that it handles absolute paths and drives' letters - more on that in the docs.

	The second optional argument usually called mode can be used to define what type of access rights you need for the given file. It can be e.g. read, write access or just a simple check if the file exists. It's represented with an integer and thus, with fs.access() method in mind, you'll usually use File Access Constants, accessed through fs.constants to set it. These are F_OK, R_OK, W_OK, and X_OK indicating file visibility (if it even exists), read rights, write rights and executions rights respectively.

	Lastly, you need to pass a callback that always provides you with an error if something went wrong and nothing otherwise. Thus, if there's no error thrown, you can be sure that you've got the correct access to the file.

	Reading files
With the correct results of the access check, you can continue to read the file. In Node.js it's not harder than calling fs.readFile(). As arguments, you must pass the path to the file and callback, where you get access to your file's data in a buffer format.
*/

	fs.readFile("file.js", (err, data) => {
		if (!err) {
			console.log(data); // <Buffer ...>
		}
	});
//
// But, data in buffer format isn't really useful.
// Sure, you can still use it the way you want and e.g. parse it later, but let's say that we want to access the content of the file in "text" format,
// meaning with standard utf8 encoding. For this purpose, we can utilize the optional options parameter and pass a string indicating the encoding
// or an object with encoding and flag properties.
// The second one should be a string consisting of available File System Flags, meaning e.g. "a" (append), "r" (read, default) or "w" (write).

	fs.readFile("file.js", "utf8", (err, data) => {
		if (!err) {
			console.log(data); // file content
		}
	});
//Reading directories
//Using fs.readFile() with directory paths isn't recommended because of its platform-specific behavior (mostly error-throwing). Instead, you should use the respective fs.readdir() method. In its form, this method is extremely similar to its file-reading counterpart - same arguments, just different optional parameters and lower-case letter in method's name.

	fs.readdir("some/dir", (err, entries) => {
		if (!err) {
			console.log(entries); // ["file1.js", "file2.js"]
		}
	});

// In the options object, encoding defaults to "utf8" now (set to "buffer" if you want buffers) and second, withFileTypes boolean being set to true,
// results in an array of fs.Dirent instances, providing useful info with methods such as .isDirectory(), .isFile(), or .isSymbolicLink().

	fs.readdir("some/dir", {withFileTypes: true }, (err, entries) => {
		if (!err) {
			entries.forEach(entry => {
				console.log(entry.isFile()); // true
			});
	``	}
	});
//Links
//Speaking of linking, you can easily get its source path with fs.readlink().
// Its form is similar to the previous methods, with optional object properties including only encoding, which defaults to "utf8".

	fs.readlink("symlinkedFile.js", (err, link) => {
		if (!err) {
			console.log(link); // symlink source path
		}
	});
// File descriptors
// Last but not least, we have the fs.open().
// It's a lower-level method, used internally by almost all Node.js methods related to FS read and write.
// Given the path, string of system flags, optional mode number and callback function it can create, read or recreate file that will later be available to read,
// write or whatever, depending on the passed arguments. It's important to know that in comparison to fs.access(),
// this method's mode parameter can be set, again, with fs.constants (File Open Constants), but this time they're starting with O_ - e.g. O_RDONLY, O_WRONLY.

	fs.open("file.js", "r+", fs.constants.O_RDWR, (err, fd) => {
		if (!err) {
			console.log(fd);
		}
	});

// Again, this is a bit more lower-level method and you'll most likely won't be using it for everyday tasks.
// Here, one of the most important things is the value it returns - often named fd. It's so-called file descriptor.
// It's basically an integer ID for the given file. It's very often referenced throughout FS module docs and used by other low-level methods,
// like fs.read() or fs.write() that interact with buffers more deeply. Again, we won't cover them as you won't really need them for most of FS tasks.
// But, what's more interesting, file descriptors can also be used instead of paths for some FS methods, like fs.readFile().


	fs.open("file.js", "r+", fs.constants.O_RDWR, (err, fd) => {
		if (!err) {
			fs.readFile(fd, "utf8", (err, data) => {
				if (!err) {
					console.log(data);
				}
			});
		}
	});

//File "opened" with fs.open() can later be "closed" with extremely simple fs.close() taking only file descriptor and a callback.


	fs.close(fd, () => {
		if (!err) {

		}
	});

//As you can see, reading files is quite easy. You just need to know a bit about these fs.constants and File System Flags. But even if, it's only for more advanced used and modern TS-enabled IDE or code editor with autocompletion will most likely do the job of remembering them for you. Also, don't let the examples above blind you - handling FS errors needs a bit more care than simple if-checks. And finally, if you wonder just why only the fs.readFile() is written in the camelCase (apart from -Sync counterparts), it's because of what they represent. Methods written in camelCase are those implemented by Node.js itself, while the other ones are modeled after POSIX C functions. The same goes for all up-coming methods. Mind the single-worded ones!

//Writing
//In FS-related stuff, writing can be understood in two ways - either you're writing some content to a file or you're writing any kind of changes to the file system (including changing a file). Here, we're going with the second, broader approach.

//Writing files
//Starting with a casual file's content writing, we have the fs.writeFile() method. Here, we provide the path of our writable file (or file descriptor), data to be written in the form of string or buffer and the callback function. The additional options object can include flag (File System Flags string - "w" by default), encoding for the data you provide (defaults to "utf8") and mode properties, or be a simple string that specifies the encoding only. But, most of the times you'll be just fine without them.


	fs.writeFile("file.js", "Data to be written", err => {
		if (!err) {
			console.log("Written");
		}
	});

//While fs.writeFile() completely wipes out the previous content of the file, the fs.appendFile() will do the job just fine when you want to append something to the file. It's calling structure is almost the same as fs.writeFile() with the one, the single difference being that optional File System Flags string (file property) defaults to "a" to allow appending.


fs.appendFile("file.js", "Data to be appended", err => {
	if (!err) {
		console.log("Appended");
	}
});

//Finally, you can also truncate the current content of the given file with fs.truncate(). It simply takes the path for a file and a number indicating to what length you want to truncate it to. Oh, and surely a callback.


	fs.truncate("file.js", 10, err => {
		if (!err) {
			console.log("Truncated");
		}
	});

//If the provided length exceeds the lengths of the given file, it will be filled with null characters, leaving weird, most-likely unwanted chars in your files. You can't use this method with file descriptors. For this, you can use its direct counterpart called fs.ftruncate().

//Directories
//Node.js also provides a set of methods related to changing/writing directories. One of which being well-known for many terminal users is fs.mkdir(). It takes the path for your new directory, options object (optional) and a callback function. In options object, you can pass the mode property (again, for permissions and stuff) and recursive boolean indicating whether parent dirs leading to the one provided within your path should be created if they don't already exist.


fs.mkdir("my/new/dir", {recursive: true}, err => {
	if(!err) {
		console.log("Created");
	}
});

//If your new directory is meant to store only some temporary data, you should use the fs.mkdtemp() method. It's a bit different from fs.mkdir(). Instead of a path, it has a prefix parameter, which is kind of like a path, but six random characters will be later added to it. Options object takes the encoding property (defaults to "utf8") which indicates the encoding for the processed path, but you can also use the string format. And finally, a callback (apart from standard err argument) is provided with the name for your new temporary directory.

fs.mkdtemp(path.join(os.tmpdir(), "mydir"), (err, tempDir) => {
	if (!err) {
		console.log(tempDir); // e.g. /tmp/mydirY4ciGj on Linux
	}
});
//Just remember to follow a mindful practice of creating a temporary directory in your OS's temporary folder - it won't be done automatically!

//	Lastly, you can remove the given dir with simple fs.rmdir() call - standard stuff. Know that the directory should be empty before removal!


	fs.rmdir("dir/to/remove", err => {
		if (!err) {
			console.log("Removed");
		}
	});

//Links
//Creating hard and symbolic links can also be considered as an activity of writing changes to FS. In Node.js you can create symlinks with a nice fs.symlink() method. It takes the target and path for the link.


	fs.symlink("target/to/symlink", "symlink/dir", err => {
		if (!err) {
			console.log("Symlinked");
		}
	});

//Only Windows needs to make life harder by requiring a type parameter that no other platform supports. It's a string and can have a value of "dir", "file", or "junction", respecting the type of your symlink's target.

//	Hard links can be created with fs.link() method, just like with fs.symlink() but with no Windows type parameter this time.


	fs.link("target/to/link", "link/dir", err => {
		if (!err) {
			console.log("Linked");
		}
	});

//A link can be removed with the fs.unlink() providing its path. Only file links work with this method. For directories use earlier mentioned fs.rmdir().


	fs.unlink("link/dir", err => {
		if (!err) {
			console.log("Unlinked");
		}
	});

//Other changes
//Beyond all goodness above, in Node.js you can also rename or copy your files. The first operation can be performed with fs.rename() method, requiring nothing more than the current and new path... and a callback naturally.


	fs.rename("file.js", "renamedFile.js", err => {
		if (!err) {
			console.log("Renamed");
		}
	});

//Copying files is a little more demanding and require you to use fs.copyFile() method and pass not only source and destination paths but also some flags (optionally). These can be set with constants available at fs.constants (File Copy Constants) - COPYFILE_EXCL, COPYFILE_FICLONE, and COPYFILE_FICLONE_FORCE all referring to the relation between source and destination.


	fs.copyFile("file.js", "dest.js", err => {
		if (!err) {
			console.log("Copied");
		}
	});
