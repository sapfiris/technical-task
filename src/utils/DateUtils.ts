import dayjs, {ConfigType} from 'dayjs';
import utc from 'dayjs/plugin/utc';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/ru';

dayjs.extend(utc);
dayjs.extend(relativeTime);
dayjs.locale('ru');

export const VIEW_FORMAT = 'DD.MM.YYYY HH:mm:ss';
const RELATIVE_SHOWING_DAYS = 1;

function formatDate(date: ConfigType | null | undefined, useUTC = false, format = VIEW_FORMAT): string {
  const builder = useUTC ? dayjs.utc : dayjs;
  return date ? builder(date).format(format) : '';
}

function toRelativeTime(date: ConfigType | null | undefined) {
  const useRelative = dayjs().diff(dayjs(date), 'days') < RELATIVE_SHOWING_DAYS;
  if (useRelative) {
    return date ? dayjs(date).fromNow() : '';
  }
  return formatDate(date);
}

export default {
  formatDate,
  toRelativeTime,
};
