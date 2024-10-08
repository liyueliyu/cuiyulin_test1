import axios from "axios";

export const UserLogin = (data) =>
  axios.post(
    `https://gitee.com/oauth/token?
    grant_type=password&
    username=1239303157@qq.com&
    password=cyl20041030&
    client_id={378965991970d0b3465792fadd7da6b46fd7f826557361f5e435419c4387f641}&
    client_secret={a5d634265f1906997996779bc4a2a2a564ddc39e0200bd992095796050015c7f}&
    scope=projects user_info issues notes`,
    data
  );

export const getHomePage = (data) =>
  axios.post("https://gitee.com/api/v5/user/repos", data);
