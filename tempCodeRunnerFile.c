#include <stdio.h>
#include <unistd.h>

int main() {
    // Get the process ID (PID)
    pid_t pid = getpid();

    // Get the parent process ID (PPID)
    pid_t ppid = getppid();

    // Print the PID and PPID information
    printf("PID: %d\n", pid);
    printf("PPID: %d\n", ppid);

    return 0;
}
