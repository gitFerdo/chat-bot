import { randomUUID } from "crypto";
import mongoose from "mongoose";
const chatSchema = new mongoose.Schema({
    id: {
        type: String,
        default: randomUUID(),
    },
    role: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});
export default mongoose.model("Chat", chatSchema);
//# sourceMappingURL=Chats.js.map