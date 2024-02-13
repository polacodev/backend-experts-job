/* eslint-disable no-underscore-dangle */
import RATE from './rate.model';

export const createRateAPI = async ({ rate }) => {
  try {
    const newRate = new RATE({
      user_id: rate._id,
      ratedBy: rate.ratedBy,
      name: rate.name,
      rate: rate.rate,
    });
    return await newRate.save();
  } catch (error) {
    return error;
  }
};

export const deleteRateAPI = async ({ _id }) => {
  try {
    return await RATE.findByIdAndDelete(_id);
  } catch (error) {
    return error;
  }
};

export const getAllRatesAPI = async () => {
  try {
    return await RATE.find();
  } catch (error) {
    return error;
  }
};

export const getRatesByUserIdAPI = async ({ _id }) => {
  try {
    return await RATE.find({ user_id: _id });
  } catch (error) {
    return error;
  }
};

export const getRatesAverageByUserIdAPI = async ({ _id }) => {
  let totalOfPointsRates = 0;
  let response = {};
  try {
    const res = await RATE.find({ user_id: _id });
    if (res.length > 0) {
      res.forEach((element) => {
        totalOfPointsRates += element.rate;
      });
      response = { user_id: _id, averageRate: Math.round(totalOfPointsRates / res.length) };
    } else {
      response = { user_id: _id, averageRate: 0 };
    }
    return response;
  } catch (error) {
    return error;
  }
};
