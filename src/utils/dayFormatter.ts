import dayjs from "dayjs";

export const dayFormatter = (date: string) => {
  return dayjs(date).format("MMMM DD, YYYY");
};
