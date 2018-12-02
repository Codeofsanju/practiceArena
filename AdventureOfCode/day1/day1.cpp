#include <iostream>
#include <fstream>
#include <algorithm>
#include <vector>

using namespace std;


int theArray(vector <int> myVec){
    for(int i = 0; i < myVec.size(); i++){
        cout << myVec[i] << '\n';
    }
}
int firsRep(vector <int> myVec){
    for(int i = 0; i < myVec.size()-1; i++){
        if(myVec[i] == myVec[i+1]){
            return myVec[i];
        }
    }
}

int main (){
    int ans = 0;
    int x;
    vector <int> myVec;
    myVec.push_back(0);

    ifstream inFile;
    inFile.open("./nums.txt");
    if(!inFile){
        cerr << "Unable to open file!" << endl;
        exit(1);
    }
    
    while(inFile >> x){
        ans += x;
        myVec.push_back(ans);
    }
        std::sort (myVec.begin(), myVec.end()); 
        theArray(myVec);
        cout << firsRep(myVec) << endl;

    return 0;
}