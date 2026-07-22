class Solution {
    removeLoop(head) {
        let slow = head;
        let fast = head;

        // Detect the loop using Floyd's Cycle Detection
        while (fast !== null && fast.next !== null) {
            slow = slow.next;          
            fast = fast.next.next;     
            // If both pointers meet, a loop exists
            if (slow === fast) {
                break;
            }
        }

        // if no loop found
        if (fast === null || fast.next === null) {
            return;
        }

        // Move slow back to head
        slow = head;

        // if oop starts at the head
        // if (slow === fast) {
        //     // Find the last node of the loop
        //     while (fast.next !== slow) {
        //         fast = fast.next;
        //     }

        //     // Break the loop
        //     fast.next = null;
        //     return;
        // }

        // Step 2: Find the start of the loop
        // Both pointers move one step at a time.
        // They meet at the starting node of the loop.
        while (slow !== fast) {
            slow = slow.next;
            fast = fast.next;
        }

        // Step 3: Find the last node of the loop
        // Traverse until fast.next points to the loop start.
        while (fast.next !== slow) {
            fast = fast.next;
        }

        // Step 4: Remove the loop
        fast.next = null;
    }
}