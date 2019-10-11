package contestsys

import (
	"strconv"
	"time"
)

type Message struct {
	ID         string
	People     string
	Contest    string
	CreateTime time.Time
	Text       string
}

type MessageSys struct {
	MessageSeq int
	Messages   []Message
}

func NewMessageSys() MessageSys {
	return MessageSys{
		Messages: []Message{},
	}
}

func NewMessage(model *MessageSys, people string, contest string, txt string) string {
	msg := Message{
		ID:         strconv.Itoa(model.MessageSeq),
		People:     people,
		Contest:    contest,
		CreateTime: time.Now(),
		Text:       txt,
	}
	model.MessageSeq++
	model.Messages = append(model.Messages, msg)
	return msg.ID
}

func DeleteMessage(model *MessageSys, id string) {
	for i := len(model.Messages) - 1; i >= 0; i -= 1 {
		msg := model.Messages[i]
		if msg.ID != id {
			continue
		}
		model.Messages = append(model.Messages[:i], model.Messages[i+1:]...)
		break
	}
}

func FindMessage(model *MessageSys, id string) (Message, bool) {
	for i := len(model.Messages) - 1; i >= 0; i -= 1 {
		msg := model.Messages[i]
		if msg.ID != id {
			continue
		}
		return msg, true
	}
	return Message{}, false
}
