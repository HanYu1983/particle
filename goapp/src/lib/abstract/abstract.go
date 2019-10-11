package abstract

type IUser interface {
	GetID() string
	HasPermission(interface{}) bool
}
