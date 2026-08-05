class Solution {
    public boolean isAnagram(String s, String t) {
        int alpha[] = new int[26];
        int slen = s.length();
        int tlen = t.length();

        if(slen != tlen)
        return false;


        for(int i=0; i<slen; i++){
            alpha[s.charAt(i)-'a']++;
        }

        for(int i=0; i<tlen; i++){
            alpha[t.charAt(i)-'a']--;
        }

        for(int i=0; i<26; i++){
            if(alpha[i] != 0){
                return false;
            }
        }

        return true;
    }
}
