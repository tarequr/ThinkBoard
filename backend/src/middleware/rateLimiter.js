const ratelimit = require('../config/upstash');

const rateLimiter = async (req, res, next) => {
    try {
        const { success } = await ratelimit.limit("my-limit-key");

        if (!success) {
            return res.status(429).send({
                success: false,
                message: 'Too many requests, please try again later'
            });
        }

        next();
    } catch (error) {
        console.error('Rate Limiter Error:', error);
        next(error);
        return res.status(500).send({
            success: false,
            message: 'Internal Server Error'
        });
    }
}

module.exports = rateLimiter;