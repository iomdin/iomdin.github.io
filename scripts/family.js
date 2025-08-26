
FamilyTree.templates.myTemplate = Object.assign({}, FamilyTree.templates.tommy);

var family = new FamilyTree(document.getElementById("tree"), {
    mouseScrool: FamilyTree.action.none,
    nodeBinding: {
        field_0: "name"
    },
    nodes: [
        { id: 1, pids: [2], name: "Leonid Iomdin", gender: "male"},
        { id: 2, pids: [1], name: "Elena Iomdina", gender: "female"},
        { id: 3, pids: [5], mid: 2, fid: 1, name: "Boris Iomdin", gender: "male"},
        { id: 4, pids: [6], mid: 2, fid: 1, name: "Lev Iomdin", gender: "male"},
        { id: 5, pids: [3], name: "Yulia Khaleeva", gender: "female"},
        { id: 6, pids: [4], name: "Irina Skomorokhova", gender: "female"},
        { id: 7, mid: 5, fid: 3, name: "Misha Iomdin", gender: "male"},
        { id: 8, mid: 5, fid: 3, name: "Yasha Iomdin", gender: "male"},
        { id: 9, mid: 6, fid: 4, name: "Eva Iomdina", gender: "female"},
        { id: 10, mid: 6, fid: 4, name: "Sasha Iomdin", gender: "male"},
        { id: 11, mid: 6, fid: 4, name: "Naum Iomdin", gender: "male"},
    ],
    enableSearch: false,
    template: "tommy"
},
);

