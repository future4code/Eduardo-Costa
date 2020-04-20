import React from "react";
import {shallow} from "enzyme";
import Comments from './index'
import CommentVote from '../../containers/CommentVote/index'
import renderer from "react-test-renderer";
import { calcHour } from "../../services/util";

const mockComment = {
    votesCount: 10,
    userVoteDirection: 1,
    id: 123,
    username: 'Teste de nome',
    text: "teste de texto",
    createdAt: 1234564789,
    topicId: 456
};

describe("Criação do componente", () => {
    test("Data flow", () => {
        const component = shallow(<Comments {...mockComment}/>);
        const commentsVote = component.find(CommentVote);

        // Checando props do CommentsVote
        expect(commentsVote.props().commentId).toBe(mockComment.id);
        expect(commentsVote.props().votesCount).toBe(mockComment.votesCount);
    });
    test("Chamando funcao que trabalha com hora", () => {
        const calcHour = jest.fn()
        const component = shallow(<Comments {...mockComment}/>);

        // Checando se chama a hora
        expect(component.find(calcHour)).toHaveBeenCalled();
    });
})
