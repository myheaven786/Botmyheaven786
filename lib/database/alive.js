const mongoose = require('mongoose');
const Alive = new mongoose.Schema({
  id: { type: String,  unique: true ,required: true, default:"🕋MyHeaven🕋"},
  text: { type: String, default: `*ι αм σηℓιηє нσω ¢αη ι нєℓρ уσυ* \n\n_ι αм ᴍυℓтι ԃєνιᴄє ωнαтѕαρρ вσт_ \n_Cʀєαtєd вყ : 🕋MyHeaven🕋_\n_If any query : wa.me/923066366544\n\n\n*_Update Alive Message by adding text with Alive_* \n*Eg: _.alive Your_Alive_Message_*` },
  get:  { type: String, default:"you did'nt set alive message yet" },
  url: { type: String, default:""},  
  image: { type: Boolean, default: false },
  video: { type: Boolean, default: false }
})

const alive =mongoose.model("alive", Alive)
module.exports = { alive }
