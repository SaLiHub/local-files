#include <stdio.h> 
void ampersand( int n, int &k ); 
int main() 
{   int n=5; 
    int k=10; 
    ampersand( n, k ); 
    printf( "n=%d &k=%d\n", n, k ); 
     return 0; 
} 
void ampersand( int n, int &k ) 
{ 
    k -= 5; 
    --n; 
} 
