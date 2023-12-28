const Products_schema = new Schema({
    name:{
        type: String,
        required: true,
      },
    price:{
        type: Number,
        required: true,
      },
    rating:{
        type: Number,
        required: true,
      },
    description:{
        type: String,
        required: true,
      },
    about :{
        type: Array,
        required: true,
      },
    color:{
        type: String,
        required: true,
      },
    type:{
        type: String,
        required: true,
      },
    brand:{
        type: String,
        required: true,
      },
    featured:{
        type: Boolean,
        required: true,
      },
    available:{
        type: String,
        required: true,
      },
    main_image:{
        type: String,
        required: true,
      },
    left_view:{
        type: String,
        required: true,
      },
    right_view:{
        type: String,
        required: true,
      },
    top_view:{
        type: String,
        required: true,
      }, 
      cart :{
        type : Array,
        required : true,
      }   
})

const Products = mongoose.model('products' , Products_schema)
module.exports  = Products; 