import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useMe from "../hooks/useMe";
import { mentor } from "../screens/ChooseMode";
import { colors } from "../colors";
import { ScrollView } from "react-native-gesture-handler";

const Container = styled.View`
  flex: 1;
  background-color: white;
  padding-left: 25px;
  padding-right: 25px;
`;

const ProfileContainer = styled.View`
  margin-top: 20px;
  align-items: center;
`;

const OuterTouchableOpacity = styled.TouchableOpacity``;

const ProfileImg = styled.Image`
  height: 120px;
  width: 120px;
  margin-bottom: 20px;
  border: 1px solid #c3c3c3;
  border-radius: 60px;
`;

const MatchingInfoContainer = styled.View`
  flex-direction: row;
  width: 100%;
  border: 1px solid ${colors.darkMint};
  border-radius: 10px;
  padding: 10px 30px 10px 30px;
  justify-content: space-between;
`;

const MatchingInfoSmallContiner = styled.View`
  flex-direction: column;
  align-items: center;
`;

const NameText = styled.Text`
  color: black;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 30px;
`;

const SubContainer = styled.View`
  width: 100%;
  margin-bottom: 30px;
`;

const SubTitleText = styled.Text`
  color: black;
  font-size: 16px;
  font-weight: 500;
  align-self: flex-start;
  margin-bottom: 10px;
  margin-left: 3px;
`;

const MintBox = styled.View`
  border: 1px solid ${colors.darkMint};
  border-radius: 10px;
  padding: 12px 10px 12px 10px;
  height: 80px;
`;

const ProfileText = styled.Text`
  color: black;
  font-size: 15px;
  margin-left: 2px;
`;

const NormalText = styled.Text`
  color: ${(props) => (props.color ? props.color : "black")};
  font-size: ${(props) => (props.size ? props.size : 12)}px;
  font-weight: ${(props) => (props.weight ? props.weight : 500)};
`;

const CheckBoxContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const CheckBox = styled.View`
  width: 60px;
  height: 60px;
  border: 1px solid ${colors.darkMint};
  border-radius: 10px;
  background-color: ${(props) => (props.color ? props.color : "white")};
  align-items: center;
  justify-content: center;
`;

const VerticalLine = styled.View`
  height: 100%;
  width: 1px;
  background-color: ${colors.darkMint};
`;

const EditButton = styled.TouchableOpacity`
  width: 120px;
  height: 35px;
  margin-top: 10px;
  margin-bottom: 30px;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
  border-radius: 5px;
  border: 1px solid #eeeeee;
`;

const EditButtonText = styled.Text`
  color: black;
  font-size: 15px;
`;

export default function UserProfile({ user }) {
  const [image, setImage] = useState(null);
  const { data: meData } = useMe();
  return (
    <ScrollView>
      <Container>
        <ProfileContainer>
          <OuterTouchableOpacity
            onPress={() => navigation.navigate("EditProfile")}
          >
            {user.avatar ? (
              <ProfileImg source={{ uri: image ? image : user.avatar }} />
            ) : (
              <ProfileImg
                source={
                  image ? { uri: image } : require("../assets/profile.png")
                }
              />
            )}
          </OuterTouchableOpacity>
          <ProfileText>
            {user.major} {mentor ? "" : "희망"}
          </ProfileText>
          <NameText>
            {user.name} {user.mentor ? "멘토" : "멘티"}님
          </NameText>
          <SubContainer>
            <MatchingInfoContainer>
              <MatchingInfoSmallContiner>
                <NormalText color="black" size="12">
                  매칭횟수
                </NormalText>
                <NormalText color="black" size="15" weight="600">
                  0
                </NormalText>
              </MatchingInfoSmallContiner>
              <VerticalLine />
              <MatchingInfoSmallContiner>
                <NormalText color="black" size="12">
                  응답시간
                </NormalText>
                <NormalText color="black" size="15" weight="600">
                  0분 이내
                </NormalText>
              </MatchingInfoSmallContiner>
              <VerticalLine />
              <MatchingInfoSmallContiner>
                <NormalText color="black" size="12">
                  만족도
                </NormalText>
                <NormalText color="black" size="15" weight="600">
                  5.0/5.0
                </NormalText>
              </MatchingInfoSmallContiner>
            </MatchingInfoContainer>
          </SubContainer>
          <SubContainer>
            <SubTitleText>상담가능분야</SubTitleText>
            <CheckBoxContainer>
              <CheckBox
                color={user.field.includes("학습코칭") ? "#DDDDDD" : "white"}
              >
                <NormalText color="gray" size="14" weight="400">
                  학습{"\n"}코칭
                </NormalText>
              </CheckBox>
              <CheckBox
                color={user.field.includes("대학입시") ? "#DDDDDD" : "white"}
              >
                <NormalText color="gray" size="14" weight="400">
                  대학{"\n"}입시
                </NormalText>
              </CheckBox>
              <CheckBox
                color={user.field.includes("대학원") ? "#DDDDDD" : "white"}
              >
                <NormalText color="gray" size="14" weight="400">
                  대학원
                </NormalText>
              </CheckBox>
              <CheckBox
                color={user.field.includes("편입") ? "#DDDDDD" : "white"}
              >
                <NormalText color="gray" size="14" weight="400">
                  편입
                </NormalText>
              </CheckBox>
              <CheckBox
                color={user.field.includes("진로전공") ? "#DDDDDD" : "white"}
              >
                <NormalText color="gray" size="14" weight="400">
                  진로{"\n"}전공
                </NormalText>
              </CheckBox>
            </CheckBoxContainer>
          </SubContainer>
          <SubContainer>
            <OuterTouchableOpacity
              onPress={() => navigation.navigate("EditProfile")}
            >
              <SubTitleText>자기소개</SubTitleText>
              <MintBox>
                <ProfileText>{user.bio}</ProfileText>
              </MintBox>
            </OuterTouchableOpacity>
          </SubContainer>
          <SubContainer>
            <OuterTouchableOpacity>
              <SubTitleText>사진</SubTitleText>
              <MintBox></MintBox>
            </OuterTouchableOpacity>
          </SubContainer>
          <SubContainer>
            <OuterTouchableOpacity>
              <SubTitleText>상담 가능 시간표</SubTitleText>
              <MintBox></MintBox>
            </OuterTouchableOpacity>
          </SubContainer>
          <SubContainer>
            <SubTitleText>기타 정보</SubTitleText>
            <MatchingInfoContainer>
              <MatchingInfoSmallContiner>
                <NormalText color="black" size="12">
                  생일
                </NormalText>
                <NormalText color="black" size="15" weight="400">
                  {user.birth}
                </NormalText>
              </MatchingInfoSmallContiner>
              <VerticalLine />
              <MatchingInfoSmallContiner>
                <NormalText color="black" size="12">
                  성별
                </NormalText>
                <NormalText color="black" size="15" weight="400">
                  {user.gender === "male" ? "남" : "여"}
                </NormalText>
              </MatchingInfoSmallContiner>
              <VerticalLine />
              <MatchingInfoSmallContiner>
                <NormalText color="black" size="12">
                  상담 희망 금액 (30분)
                </NormalText>
                <NormalText color="black" size="15" weight="400">
                  {user.counselPriceLow} ~ {user.counselPriceHigh}원
                </NormalText>
              </MatchingInfoSmallContiner>
            </MatchingInfoContainer>
          </SubContainer>
          <EditButton onPress={() => navigation.navigate("EditProfile")}>
            <EditButtonText>프로필 수정</EditButtonText>
          </EditButton>
        </ProfileContainer>
      </Container>
    </ScrollView>
  );
}
