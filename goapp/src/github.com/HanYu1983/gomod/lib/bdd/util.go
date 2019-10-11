package bdd

import (
	"context"
	"fmt"
	"testing"

	"github.com/HanYu1983/gomod/lib/tool"
)

type ItFn func(msg string, fn func(c context.Context))

func GenIt(ctx context.Context, t *testing.T) ItFn {
	return func(msg string, fn func(c context.Context)) {
		defer tool.Recover(func(err error) {
			t.Fatal(fmt.Sprintf("[%s]%s", msg, err.Error()))
		})
		fn(ctx)
	}
}
