const mongoose = require("mongoose");

const empDbSchema = mongoose.Schema(
{
    name: {
      type: String,
      required:true,
      unique:true
    },
    phone: {
      type:Number ,
      required:true
    },
    position: {
      type:String,
      required:true
    },
    nepali: {
      type: Boolean,
      required:false
    }
  },
  {
    timestamps: true, //this will add the time when records for each employees were created
  }
);

module.exports = mongoose.model("Employee", empDbSchema);
