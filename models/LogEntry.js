var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * LogEntry Model
 * ==========
 */
var LogEntry = new keystone.List('LogEntry',{
    autokey: {path: "id", from: "timestamp", unique: true}
});

LogEntry.add({
	timestamp: { type: Types.Datetime, required: true, index: true, default: Date.now },
	text: { type: Types.Textarea, required: true, noedit: true, initial: false }
});


/**
 * Registration
 */
LogEntry.defaultColumns = 'timestamp, text';
LogEntry.register();
