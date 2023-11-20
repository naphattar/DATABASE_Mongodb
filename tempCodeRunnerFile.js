use('db-final-project');

db.religiousplaces.find({
    religiousType: "Jedi",
    $expr: { $gte: [{ $size: "$priest_list" }, 2] }
});
