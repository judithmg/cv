export default (a, b) => a.getMonth() - b.getMonth()
   + (12 * (a.getFullYear() - b.getFullYear())) + 1;
