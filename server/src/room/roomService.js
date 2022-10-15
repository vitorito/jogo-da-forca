import roomRepo from './roomRepository.js';

const findRoomById = async (id) => roomRepo.findById(id);

export default {
  findRoomById
};
