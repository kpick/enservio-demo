{"filter":false,"title":"demoloader.js","tooltip":"/demoloader.js","undoManager":{"mark":0,"position":0,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":19}},"text":"#!/usr/bin/env node"},{"action":"insertText","range":{"start":{"row":0,"column":19},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":242,"column":0}},"lines":["var mongojs = require(\"mongojs\");","","var addr = '127.0.0.1';","var databaseUrl = addr + ':27017/openiou';","","var collections = [\"queues\"]","var db = mongojs.connect(databaseUrl, collections);","","/*","db.queues.save( {","    \"queue_name\": \"Generalist\",","    \"lines_in_queue\": 2000,","    \"tasks_in_queue\": 100,","    \"claims_in_queue\": 50,","    \"tasks\": {","        \"task1202\": {","            \"description\": \"XXXXXX\",","            \"date_due\" : \"2014-08-22\",","            \"date_created\" : \"2014-08-20\",","            \"owner\" : \"DHughes\",","            \"claim\" : \"103928882\"","        },","        \"task1203\": {","            \"description\": \"XXXXXX\",","            \"date_due\" : \"2014-08-22\",","            \"date_created\" : \"2014-08-20\",","            \"owner\" : \"DHughes\",","            \"claim\" : \"103928882\"","        },","        \"task1204\": {","            \"description\": \"XXXXXX\",","            \"date_due\" : \"2014-08-22\",","            \"date_created\" : \"2014-08-20\",","            \"owner\" : \"DHughes\",","            \"claim\" : \"103928882\"","        },","        \"task1205\": {","            \"description\": \"XXXXXX\",","            \"date_due\" : \"2014-08-22\",","            \"date_created\" : \"2014-08-20\",","            \"owner\" : \"DHughes\",","            \"claim\" : \"103928882\"","        },","        \"task1206\": {","            \"description\": \"XXXXXX\",","            \"date_due\" : \"2014-08-22\",","            \"date_created\" : \"2014-08-20\",","            \"owner\" : \"DHughes\",","            \"claim\" : \"103928882\"","        },","    }","})","","","db.queues.save( {","    \"queue_name\": \"Furniture\",","    \"lines_in_queue\": 100,","    \"tasks_in_queue\": 10,","    \"claims_in_queue\": 5,","    \"tasks\": {","        \"task1202\": {","            \"description\": \"XXXXXX\",","            \"date_due\" : \"2014-08-22\",","            \"date_created\" : \"2014-08-20\",","            \"owner\" : \"DHughes\",","            \"claim\" : \"103928882\"","        },","        \"task1203\": {","            \"description\": \"XXXXXX\",","            \"date_due\" : \"2014-08-22\",","            \"date_created\" : \"2014-08-20\",","            \"owner\" : \"DHughes\",","            \"claim\" : \"103928882\"","        },","        \"task1204\": {","            \"description\": \"XXXXXX\",","            \"date_due\" : \"2014-08-22\",","            \"date_created\" : \"2014-08-20\",","            \"owner\" : \"DHughes\",","            \"claim\" : \"103928882\"","        },","        \"task1205\": {","            \"description\": \"XXXXXX\",","            \"date_due\" : \"2014-08-22\",","            \"date_created\" : \"2014-08-20\",","            \"owner\" : \"DHughes\",","            \"claim\" : \"103928882\"","        },","        \"task1206\": {","            \"description\": \"XXXXXX\",","            \"date_due\" : \"2014-08-22\",","            \"date_created\" : \"2014-08-20\",","            \"owner\" : \"DHughes\",","            \"claim\" : \"103928882\"","        },","    }","})","","","db.queues.save( {","    \"queue_name\": \"Tools\",","    \"lines_in_queue\": 500,","    \"tasks_in_queue\": 50,","    \"claims_in_queue\": 10,","    \"tasks\": {","        \"task1202\": {","            \"description\": \"XXXXXX\",","            \"date_due\" : \"2014-08-22\",","            \"date_created\" : \"2014-08-20\",","            \"owner\" : \"DHughes\",","            \"claim\" : \"103928882\"","        },","        \"task1203\": {","            \"description\": \"XXXXXX\",","            \"date_due\" : \"2014-08-22\",","            \"date_created\" : \"2014-08-20\",","            \"owner\" : \"DHughes\",","            \"claim\" : \"103928882\"","        },","        \"task1204\": {","            \"description\": \"XXXXXX\",","            \"date_due\" : \"2014-08-22\",","            \"date_created\" : \"2014-08-20\",","            \"owner\" : \"DHughes\",","            \"claim\" : \"103928882\"","        },","        \"task1205\": {","            \"description\": \"XXXXXX\",","            \"date_due\" : \"2014-08-22\",","            \"date_created\" : \"2014-08-20\",","            \"owner\" : \"DHughes\",","            \"claim\" : \"103928882\"","        },","        \"task1206\": {","            \"description\": \"XXXXXX\",","            \"date_due\" : \"2014-08-22\",","            \"date_created\" : \"2014-08-20\",","            \"owner\" : \"DHughes\",","            \"claim\" : \"103928882\"","        },","    }","})","","db.queues.save( {","    \"queue_name\": \"Triage\",","    \"lines_in_queue\": 1000,","    \"tasks_in_queue\": 50,","    \"claims_in_queue\": 25,","    \"tasks\": {","        \"task1202\": {","            \"description\": \"XXXXXX\",","            \"date_due\" : \"2014-08-22\",","            \"date_created\" : \"2014-08-20\",","            \"owner\" : \"DHughes\",","            \"claim\" : \"103928882\"","        },","        \"task1203\": {","            \"description\": \"XXXXXX\",","            \"date_due\" : \"2014-08-22\",","            \"date_created\" : \"2014-08-20\",","            \"owner\" : \"DHughes\",","            \"claim\" : \"103928882\"","        },","        \"task1204\": {","            \"description\": \"XXXXXX\",","            \"date_due\" : \"2014-08-22\",","            \"date_created\" : \"2014-08-20\",","            \"owner\" : \"DHughes\",","            \"claim\" : \"103928882\"","        },","        \"task1205\": {","            \"description\": \"XXXXXX\",","            \"date_due\" : \"2014-08-22\",","            \"date_created\" : \"2014-08-20\",","            \"owner\" : \"DHughes\",","            \"claim\" : \"103928882\"","        },","        \"task1206\": {","            \"description\": \"XXXXXX\",","            \"date_due\" : \"2014-08-22\",","            \"date_created\" : \"2014-08-20\",","            \"owner\" : \"DHughes\",","            \"claim\" : \"103928882\"","        },","    }","})","","","","db.queues.save( {","    \"queue_name\": \"Jewelry\",","    \"lines_in_queue\": 10,","    \"tasks_in_queue\": 5,","    \"claims_in_queue\": 3,","    \"tasks\": {","        \"task1202\": {","            \"description\": \"XXXXXX\",","            \"date_due\" : \"2014-08-22\",","            \"date_created\" : \"2014-08-20\",","            \"owner\" : \"DHughes\",","            \"claim\" : \"103928882\"","        },","        \"task1203\": {","            \"description\": \"XXXXXX\",","            \"date_due\" : \"2014-08-22\",","            \"date_created\" : \"2014-08-20\",","            \"owner\" : \"DHughes\",","            \"claim\" : \"103928882\"","        },","        \"task1204\": {","            \"description\": \"XXXXXX\",","            \"date_due\" : \"2014-08-22\",","            \"date_created\" : \"2014-08-20\",","            \"owner\" : \"DHughes\",","            \"claim\" : \"103928882\"","        },","        \"task1205\": {","            \"description\": \"XXXXXX\",","            \"date_due\" : \"2014-08-22\",","            \"date_created\" : \"2014-08-20\",","            \"owner\" : \"DHughes\",","            \"claim\" : \"103928882\"","        },","        \"task1206\": {","            \"description\": \"XXXXXX\",","            \"date_due\" : \"2014-08-22\",","            \"date_created\" : \"2014-08-20\",","            \"owner\" : \"DHughes\",","            \"claim\" : \"103928882\"","        },","    }","})","","*/","","//db.queues.remove({_id : mongojs.ObjectId(\"53f745a999ddad4e0ac9e9e1\")});","","db.queues.find().limit(20).toArray(function(err, results){","    console.log(results);","});",""]}]}]]},"ace":{"folds":[],"scrolltop":3439,"scrollleft":0,"selection":{"start":{"row":242,"column":0},"end":{"row":242,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":213,"state":"comment_regex_allowed","mode":"ace/mode/javascript"}},"timestamp":1411733142947,"hash":"945dd3ff973c43784b31843b7c6fe3af9963fdbe"}