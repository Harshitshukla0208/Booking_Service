const {BookingService} = require('../services/index');
const {StatusCodes} = require('http-status-codes');

const bookingService = new BookingService();

const create = async (req,res) => {
    try {
        const response = await bookingService.createBooking(req.body);
        return res.status(StatusCodes.OK).json({
            message: 'Successfully completed the booking',
            success: true,
            err: {},
            data: response
        })
    } catch (error) {
        return res.status(500).json({
            message: 'Something went wrong in service layer',
            success: false,
            err: 'Something went wrong',
            data: {}
        })
        // return res.status(error.statusCode).json({
        //     message: error.message,
        //     success: false,
        //     err: error.explanation,
        //     data: {}
        // });
    }
}

module.exports = {
    create
}