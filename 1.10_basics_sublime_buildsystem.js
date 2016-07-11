//First set up a new build system.
// Go to Tools -> Build System -> New Build System --> Add the code below
/*
{
	"cmd": ["node", "$file"]
}
//Some people on Macs might need this instead. 
{
    "cmd": ["/usr/local/bin/node", "$file", "$file_base_name"],
    "working_dir": "${project_path:${folder}}",
    "selector": "*.js"
}


//SHOW the build 
*/
