class Solution {
    public boolean isValidSudoku(char[][] board) {
        // check rows/cols
        HashSet<Character> rowSet = new HashSet<Character>();
        HashSet<Character> colSet = new HashSet<Character>();
        for(int i = 0; i < 9; i++) {
            for(int j = 0; j < 9; j++) {
                // check row char
                char rowChar = board[i][j];
                if(rowSet.contains(rowChar)) return false;
                if(rowChar != '.') rowSet.add(rowChar);
                
                // check col char
                char colChar = board[j][i];
                if(colSet.contains(colChar)) return false;
                if(colChar != '.') colSet.add(colChar);
            }
            rowSet.clear();
            colSet.clear();
        }
        
        //check sub-boxes
        int min = 0;
        int max = 2;
        int colMin = 0; 
        int colMax = 2;
        for(int a = 0; a < 3; a++) {
            for(int b = 0; b < 3; b++) {
                for(int i = colMin; i <= colMax; i++) {
                    for(int j = min; j <= max; j++) {
                        char c = board[i][j];
                        if(rowSet.contains(c)) return false;
                        if(c != '.') rowSet.add(c);
                    }
                }
                rowSet.clear();
                min += 3;
                max += 3;
            }
            colMin += 3;
            colMax += 3;
            min = 0;
            max = 2;
        }
        return true;
    }
}
