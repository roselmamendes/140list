module.exports = {
  get_lists_info : function(data){
    var data_json = this.convert_to_json(data);

    if(data_json.twitter_original_data){
      return data_json;
    }

    return this.extract_to_list_info(data_json);
  },

  extract_to_list_info : function(data_json){
    var lists_names = [];
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
    }catch(e){
      return {
        "data": [],
        "twitter_original_data": data
      };
    }

    return data_json;
  },

  get_tweets_by_list : function(data){
    var data_json = this.convert_to_json(data);

    if(data_json.twitter_original_data){
      return data_json;
    }

    return this.extract_to_tweets(data_json);

  },
  
  extract_to_tweets : function(data_json){
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
