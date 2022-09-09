

#include <iostream>
using namespace std;
class Test
{
 Test(){ cout << "Test"<<endl; };
 ~Test(){ cout << "Destroy Test"<<endl; };
};
struct TestS
{
 TestS(){ cout << "TestS"<<endl; 
};
 ~TestS(){ cout << "Destroy TestS"<<endl;; };
};
int main()
{ Test *clas = new Test;
 TestS *struc = new TestS;
 delete struc;
 delete clas;
 return 0;
}