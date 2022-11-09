import { Storage } from "../interfaces/storage";
import StorageModel from "../models/storage";

const registerUpload = async (storage: Storage) => {
    return await StorageModel.create(storage);
};

export { registerUpload };