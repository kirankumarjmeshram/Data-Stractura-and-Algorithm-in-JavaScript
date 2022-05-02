// https://practice.geeksforgeeks.org/problems/find-length-of-loop/1#

function countNodesinLoop(head)
    {
        let slow = head;
        let fast = head;
        while (fast !== null && fast.next !== null){
            slow = slow.next;
            fast = fast.next.next;
            
            if(slow == fast){
               let  count = 1;
               slow = slow.next;
               while( slow !== fast){
                   count++;
                   slow = slow.next;
                   
               }
               return count
            }
        }
        return 0
    }