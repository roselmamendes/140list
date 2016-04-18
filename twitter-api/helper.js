module.exports = {
  get_lists_info : function(data){
    data_json = JSON.parse(data);
    lists_names = [];
    for(i=0; i < data_json.length ; i++){

      lists_names[i] = {
        "name": data_json[i]["name"],
        "id": data_json[i]["id"]
      };

    }
    return lists_names;
  }
}