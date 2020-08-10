function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const resListNode = new ListNode(null)
  let temp = resListNode
  let jinwei = 0
  while(jinwei || l1 || l2) {
      l1 = l1 ? l1 : new ListNode(null)
      l2 = l2 ? l2 : new ListNode(null)
      let sum = (l1.val || 0) + (l2.val || 0) + jinwei
      jinwei = sum > 9 ? 1 : 0
      temp.next = new ListNode(sum % 10)
      l1 = l1.next
      l2 = l2.next
      temp = temp.next
  }
  return resListNode.next
};