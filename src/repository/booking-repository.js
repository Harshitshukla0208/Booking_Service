const { StatusCodes } = require('http-status-codes');
const { AppError, ValidationError } = require('../utils/errors/index');
const { Booking } = require('../models/index');
const { AppError } = require('../utils/errors');

class BookingRepository {
    async create(data) {
        try {
            const booking = await Booking.create(data);
            return booking;
        } catch (error) {
            if(error.name == 'SequelizeValidationError'){
                throw new ValidationError(error);
            }
            throw new AppError(
                'RepositoryError',
                'Cannot create booking',
                'There was some issue in creating the booking, Please try again later',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }
}

module.exports = BookingRepository;