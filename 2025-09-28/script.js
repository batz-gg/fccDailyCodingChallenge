const getHeadings = csv => csv.split(",").map(a => a.trim());

console.log(getHeadings("username , email , signup date "))