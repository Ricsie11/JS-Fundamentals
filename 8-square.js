const shape = parseInt(process.argv[2]);

if (isNaN(shape)){
    console.log("Missing size")
} else {
    for (let i = 0; i < shape; i++){
        console.log("X".repeat(shape));
    }
}