package tool

import (
  "bufio"
  "strings"
  "io"
  "os"
  "image"
  "image/jpeg"
  "image/png"
  "errors"
)

func StringWithFilePath(path string) string {
  lines, err := ReadLines( path )
  if err != nil {
    panic( err.Error() )
  }
  return strings.Join( lines, "" )
}

func GetFile(filepath string) (file *os.File, err error){
  return os.Open(filepath)
}

func File2Bytes(file *os.File) (ret []byte, err error) {
  var bytes []byte
  buf := make([]byte, 16)
  for {
    n, err := file.Read(buf)
    if err != nil && err != io.EOF {
      return nil, err
    }
    if n == 0 {
      break
    }
    bytes = append(bytes, buf[:n]...)
  }
  return bytes, nil
}

func File2Image(file *os.File, imageType string) (img image.Image, err error){
  DecodeFn := func() func(file *os.File) (img image.Image, err error){
    switch imageType {
    case "png":
      return func(file *os.File) (img image.Image, err error){
        return png.Decode(file)
      }
    case "jpg", "jpeg":
      return func(file *os.File) (img image.Image, err error){
        return jpeg.Decode(file)
      }
    }
    return func(file *os.File) (img image.Image, err error){
      return nil, errors.New("image type not found")
    }
  }()
  return DecodeFn(file)
}

func ReadLines(path string) ([]string, error) {
  file, err := os.Open(path)
  if err != nil {
    return nil, err
  }
  defer file.Close()

  var lines []string
  scanner := bufio.NewScanner(file)
  for scanner.Scan() {
    lines = append(lines, scanner.Text())
  }
  return lines, scanner.Err()
}