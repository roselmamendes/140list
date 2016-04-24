module.exports = {
  get_lists_info : function(data){
    var data_json = this.convert_to_json(data);

    lists_names = [];
    for(i=0; i < data_json.length ; i++){

      lists_names[i] = {
        "name": data_json[i]["name"],
        "id": data_json[i]["id"]
      };

    }
    return lists_names;
  },

  convert_to_json : function(data){
    var data_json;
    try{
      data_json = JSON.parse(data);
      return data_json;
    }
    catch(e){
      return [];
    }

  },

  get_tweets_by_list : function(data){
    var data_json = this.convert_to_json(data);

    var tweets = [];

    for(i=0; i < data_json.length ; i++){

      tweets[i] = {
        "created_at": data_json[i]["created_at"],
        "id": data_json[i]["id"],
        "text": data_json[i]["text"],
        "user": {
          "id": data_json[i]["user"]["id"],
          "screen_name": data_json[i]["user"]["screen_name"]
        }
      };

    }

    return tweets;

  }
}
