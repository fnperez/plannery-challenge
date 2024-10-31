import * as yup from "yup";
import dayjs from "dayjs";


export default {
  date: () => yup.string()
    .test('is-valid-date', 'Date is invalid', (value) => {
      if (!value) return false; // Required validation

      return !!dayjs(value).valueOf()
    })
}