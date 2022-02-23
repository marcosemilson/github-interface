import React from 'react';
import * as S from './styled'

const Profile = () => {
    return <S.Wrapper>
        <S.WrapperImage src="https://avatars.githubusercontent.com/u/56851633?v=4" alt="avatar of User" />
        <S.WrapperInfoUser>
            <h1>Marcos Emilson</h1>
            <S.WrapperInfoUser>
                <h3>userName: </h3>
                <sapm>MarcosEmilson</sapm>
            </S.WrapperInfoUser>
            <S.WrapperInfoUser>
                <h3>Company</h3>
                <spam>Autonomo</spam>
            </S.WrapperInfoUser>
            <S.WrapperInfoUser>
                <h3>Blog:</h3>
                <spam>GitHub</spam>
            </S.WrapperInfoUser>
            <S.WrapperStatusCount>
                <div>
                    <h4>Followres</h4>
                    <spam>5</spam>
                </div>
                <div>
                    <h4>Following</h4>
                    <spam>5</spam>
                </div>
                <div>
                    <h4>Gits</h4>
                    <spam>5</spam>
                </div>
                <div>
                    <h4>Repos</h4>
                    <spam>5</spam>
                </div>
            </S.WrapperStatusCount>
        </S.WrapperInfoUser>
    </S.Wrapper>;
};

export default Profile;