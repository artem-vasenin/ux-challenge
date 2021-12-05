/** Function for calculating the publication time */
export const getTime = (questionTs) => Math.floor((new Date() - new Date(questionTs)) / 1000 / 60 / 60);
