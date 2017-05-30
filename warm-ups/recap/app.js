//primitive mutable
var example = 2;
var anotherExample = example;
example = 3;
console.log(anotherExample);

//composite Immutable
var rubixCube = {
    property: "one side orange"
};
var somebodyElse = rubixCube;

somebodyElse.property = "scrambled";
console.log(rubixCube);



var rubixCube = ["orange", "red", "green", "blue"];
var somebobyElse = 