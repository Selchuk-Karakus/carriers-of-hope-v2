const pgClient = require("../config/postgres");

async function selectOrdersByMemberId(memberId) {
  return await pgClient.pool
    .query(
      `SELECT id, ` +
        `order_date as orderDate, ` +
        `order_ref as orderRef, ` +
        `member_id as memberId ` +
        `FROM orders where member_id = ${memberId};`);
}


module.exports = {
  selectOrdersByMemberId
};
