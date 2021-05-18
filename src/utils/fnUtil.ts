import { curry, isNil, reject } from 'ramda';

export const isEmpty = (value) => {
  return value === '' || isNil(value) || value === {};
};

export const rejectEmpty = reject(isEmpty);

export const logTap = curry((label, value) => {
  console.log(label, value);
  return value;
});
