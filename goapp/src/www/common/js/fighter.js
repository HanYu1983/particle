var fighter = fighter || {};

(function (module) {
  function load(path, cb) {
    $.ajax({
      url: path,
      dataType: "text",
      success: function (data) {
        // skip first line
        var [_, ...lines] = data.split("\n");
        var jsons = lines
          .map((line) => line.split("\t"))
          .map((row) => {
            const id = row[0];
            const title = row[1];
            const weight = row[2];
            const attackType = row[3];
            const outsidePower = row[4];
            const insidePower = row[5];
            const skillType = row[6];
            const skillCost = row[7];
            const skillName = row[8];
            const skillMana = row[9];
            const skillText = row[10];
            return {
              id: id,
              cid: id,
              title: title,
              skillType: skillType,
              weight: weight,
              outsidePower: outsidePower,
              insidePower: insidePower,
              attackType: attackType,
              skillCost: skillCost,
              skillName: skillName,
              skillText: skillText,
              skillMana: skillMana,
            };
          });
        cb(null, jsons);
      },
      error: function (xhr, res, err) {
        cb(err);
      },
    });
  }

  module.load = load;
})(fighter);
